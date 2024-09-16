import {Link, useNavigate} from "react-router-dom";

function ScholarshipCard({scholarship}) {

  return (
    <div className="card border bg-white w-[98%] m-2 shadow-inner transition-all hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title underline">{scholarship.title}</h2>
        <p className="text-lg text-gray-500 line-clamp-2">
          {scholarship.description}
        </p>
        <div className="flex flex-row gap-3 my-4">
          <div className="badge badge-outline badge-primary">
            Eligible Course: {scholarship.eligibility.eligiblecourse}
          </div>
          <div className="badge badge-outline badge-secondary">
            Minimum GPA: {scholarship.eligibility.MinimumGPA}
          </div>
          <div className="badge badge-outline badge-accent">
            Nationality: {scholarship.eligibility.nationality}
          </div>
          <div className="badge badge-outline badge-info">
            State: {scholarship.eligibility.state}
          </div>
          <div className="badge badge-outline badge-warning">
            Category: {scholarship.eligibility.category}
          </div>
        </div>
        <div className="badge badge-outline badge-error">
          {scholarship.eligibility.otherdetails}
        </div>

        <div className="card-actions justify-end">
          <Link to={"/discussionForum"} className="btn btn-outline btn-primary">
            Go to discussion form
          </Link>
          <Link
            className="btn btn-primary"
            to={`/scholarshipDetails/${scholarship._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipCard;
