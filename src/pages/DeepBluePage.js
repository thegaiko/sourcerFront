import React from 'react';
import { useNavigate } from 'react-router-dom';

function DeepBluePage() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Deep Blue Horizon</h1>
            <p>This page contains detailed information about the Deep Blue Horizon project.</p>
            <div onClick={() => navigate(-1)}>Back</div>
            {/* Add more content about Deep Blue Horizon */}
        </div>
    );
}

export default DeepBluePage;
