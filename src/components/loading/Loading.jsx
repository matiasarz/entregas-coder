import { DotSpinner } from '@uiball/loaders';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loadingContainer">
            <DotSpinner size={100} speed={0.9} color="#38f" />
        </div>
    );
};

export default Loading;
