import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css"

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/members');
        setMembers(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchMembers();
  }, [])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <p className="text-danger">{error.message || 'An error occurred'}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Members</h1>
      {members.length > 0 ? (
        <div className="row">
          {members.map((member) => {
            return (
              <div className="col-md-4 mb-4" key={member.id}>
                <div className="card">
                  <img src={member.image_url} className="card-img-top member-img mt-4" alt={member.name} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.bio}</p>
                    <p className="card-text">Team: {member.team}</p>
                  </div>
                </div>  
              </div>  
            );
          })}
        </div>
      ) : (
        <p className="text-muted">No members found.</p>
      )}
    </div>
  );
};
  
export default Members;