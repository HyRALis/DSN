import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description },
}) => {
  return (
    <div className="my-1">
      <h3 className="text-dark">{school}</h3>
      <p>
        <strong>Field of study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileEducation;
