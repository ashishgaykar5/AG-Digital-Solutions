import React from "react";
import { useAuth } from "../context/useAuth";

function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <main className="page dashboard-page">

            <div className="dashboard-container">

                <div className="dashboard-header">
                    <span>AG DASHBOARD</span>

                    <h1>
                        Welcome, {user?.name || "User"} 👋
                    </h1>

                    <p>
                        Welcome to your AG account dashboard.
                    </p>
                </div>


                <div className="dashboard-grid">

                    {/* Profile */}

                    <div className="dashboard-card">

                        <h2>My Profile</h2>

                        <div className="profile-item">
                            <strong>Name</strong>
                            <p>{user?.name || "N/A"}</p>
                        </div>

                        <div className="profile-item">
                            <strong>Email</strong>
                            <p>{user?.email || "N/A"}</p>
                        </div>

                        <div className="profile-item">
                            <strong>Account</strong>
                            <p>Active</p>
                        </div>

                    </div>


                    {/* Account */}

                    <div className="dashboard-card">

                        <h2>Account</h2>

                        <p>
                            Your account is authenticated
                            using JWT.
                        </p>

                        <button
                            className="logout-btn"
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Dashboard;