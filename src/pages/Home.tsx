import PromptToRequest from "../components/PromptToRequest.tsx";

const Home: React.FC = () => {      
    
      return (
        <>
            <div className="main-layout">
                    <div className="verticalSection"> 
                        <PromptToRequest />
                        <div className="divider"/>
                    </div>
                
            </div>
        </> 
      );
};

export default Home;