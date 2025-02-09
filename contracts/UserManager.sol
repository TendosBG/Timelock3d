// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract UserManager {
    struct User {
        string pseudo;
        bool registered;
        uint256[] mintedNFTs;
        uint256[] purchasedNFTs;
        uint256[] listedNFTs;
        mapping(string => uint256[]) collections;
    }

    mapping(address => User) private users;
    mapping(string => bool) private pseudoExists;

    event UserRegistered(address indexed user, string pseudo);
    event NFTMinted(address indexed user, uint256 nftId);
    event NFTPurchased(address indexed user, uint256 nftId);
    event NFTListed(address indexed user, uint256 nftId);
    event CollectionCreated(address indexed user, string collectionName);
    event NFTAddedToCollection(address indexed user, string collectionName, uint256 nftId);

    modifier onlyRegistered() {
        require(users[msg.sender].registered, "User not registered");
        _;
    }

    function register(string memory _pseudo) public {
        require(!users[msg.sender].registered, "User already registered");
        require(!pseudoExists[_pseudo], "Pseudo already taken");

        users[msg.sender].pseudo = _pseudo;
        users[msg.sender].registered = true;
        pseudoExists[_pseudo] = true;

        emit UserRegistered(msg.sender, _pseudo);
    }

    function addMintedNFT(uint256 _nftId) public onlyRegistered {
        users[msg.sender].mintedNFTs.push(_nftId);
        emit NFTMinted(msg.sender, _nftId);
    }

    function addPurchasedNFT(uint256 _nftId) public onlyRegistered {
        users[msg.sender].purchasedNFTs.push(_nftId);
        emit NFTPurchased(msg.sender, _nftId);
    }

    function listNFT(uint256 _nftId) public onlyRegistered {
        users[msg.sender].listedNFTs.push(_nftId);
        emit NFTListed(msg.sender, _nftId);
    }

    function createCollection(string memory _collectionName) public onlyRegistered {
        require(bytes(_collectionName).length > 0, "Collection name required");
        require(users[msg.sender].collections[_collectionName].length == 0, "Collection already exists");

        emit CollectionCreated(msg.sender, _collectionName);
    }

    function addToCollection(string memory _collectionName, uint256 _nftId) public onlyRegistered {
        require(users[msg.sender].collections[_collectionName].length >= 0, "Collection does not exist");

        users[msg.sender].collections[_collectionName].push(_nftId);
        emit NFTAddedToCollection(msg.sender, _collectionName, _nftId);
    }

    function getUserInfo(address _user) public view returns (
        string memory pseudo,
        uint256[] memory mintedNFTs,
        uint256[] memory purchasedNFTs,
        uint256[] memory listedNFTs
    ) {
        require(users[_user].registered, "User not registered");

        return (
            users[_user].pseudo,
            users[_user].mintedNFTs,
            users[_user].purchasedNFTs,
            users[_user].listedNFTs
        );
    }

    function getCollection(address _user, string memory _collectionName) public view returns (uint256[] memory) {
        require(users[_user].registered, "User not registered");
        return users[_user].collections[_collectionName];
    }
}