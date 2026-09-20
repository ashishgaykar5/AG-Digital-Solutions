import React, { useEffect, useState } from "react";
import {
    getCurrentUser,
    updateProfile
} from "../services/api";

function Profile() {

    const [user, setUser] = useState(null);

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {

        const loadProfile = async () => {

            try {

                const data = await getCurrentUser();

                setUser(data.user);

                setName(data.user.name || "");
                setMobile(data.user.mobile || "");

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        loadProfile();

    }, []);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        if (name.trim().length < 2) {
            setError("Name must contain at least 2 characters");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            setError("Enter a valid 10 digit mobile number");
            return;
        }


        try {

            setSaving(true);

            const data = await updateProfile(
                name,
                mobile
            );

            setUser(data.user);

            setName(data.user.name);
            setMobile(data.user.mobile);

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            setMessage(
                "Profile updated successfully!"
            );

        } catch (err) {

            setError(err.message);

        } finally {

            setSaving(false);

        }
    };


    if (loading) {
        return (
            <div className="profile-loading">
                Loading profile...
            </div>
        );
    }


    if (!user) {
        return (
            <div className="profile-error">
                {error || "User not found"}
            </div>
        );
    }


    return (
        <main className="page">

            <div className="profile-container">

                <div className="profile-header">

                    <div className="profile-avatar">
                        {user.name
                            ?.charAt(0)
                            .toUpperCase()}
                    </div>

                    <div>

                        <h1>My Profile</h1>

                        <p>
                            Manage your AG account
                        </p>

                    </div>

                </div>


                <div className="profile-card">

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                value={user.email}
                                disabled
                            />

                            <small>
                                Email cannot be changed.
                            </small>

                        </div>


                        <div className="form-group">

                            <label>
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                maxLength="10"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value.replace(
                                            /\D/g,
                                            ""
                                        )
                                    )
                                }
                            />

                        </div>


                        {message && (
                            <p className="success-message">
                                {message}
                            </p>
                        )}


                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}


                        <button
                            type="submit"
                            disabled={saving}
                        >
                            {saving
                                ? "Saving..."
                                : "Update Profile"}
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}

export default Profile;