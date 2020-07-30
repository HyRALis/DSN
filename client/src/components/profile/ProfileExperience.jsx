import React from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, loaction, current, to, from, description },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="my-1">
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileExperience;
