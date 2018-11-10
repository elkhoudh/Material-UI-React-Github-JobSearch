import React from "react";

function Jobs(props) {
  const { jobs } = props;
  jobs.map(job => (
    <div>
      <h1>Title: {job.title}</h1>
    </div>
  ));
  return (
    <div>
      <h1>Title: {jobs[0].title}</h1>
      <h1>Location: {jobs[0].location}</h1>
      <h1>Type: {jobs[0].type}</h1>
      <h1>
        How To Apply: {jobs[0].how_to_apply.replace(/<\/?[^>]+(>|$)/g, "")}
      </h1>
      <img alt="..." src={jobs[0].company_logo} />
      <a href={jobs[0].url}>{jobs[0].url}</a>
      <p>Description: {jobs[0].description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
    </div>
  );
}

export default Jobs;
