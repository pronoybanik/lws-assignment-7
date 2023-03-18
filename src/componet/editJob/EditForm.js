import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeJobs } from "../../features/Jobs/JobsSlice";

const EditForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadLine, setDeadLine] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editing } = useSelector((state) => state.jobs);

  const reset = () => {
    setJobTitle("");
    setJobType("");
    setSalary("");
    setDeadLine("");
  };

  useEffect(() => {
    const { id, title, type, salary, deadLine } = editing || {};
    if (id) {
      setJobTitle(title);
      setJobType(type);
      setSalary(salary);
      setDeadLine(deadLine);
    } else {
      reset();
    }
  }, [editing]);

  const handleUpdate = () => {
    dispatch(
      changeJobs({
        id: editing.id,
        data: {
          title: jobTitle,
          type: jobType,
          salary: salary,
          deadline: deadLine,
        },
      })
    );
    navigate("/");
  };

  return (
    <form className="space-y-6">
      <div className="fieldContainer">
        <label
          for="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
          //   defaultValue={editing.title}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        >
          <option value="" hidden selected>
            Select Job
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label for="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="lwsJobType"
          required
          //   defaultValue={editing.type}
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="" hidden selected>
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label for="lws-JobSalary ">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label for="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          value={deadLine}
          onChange={(e) => setDeadLine(e.target.value)}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
          onClick={handleUpdate}
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
