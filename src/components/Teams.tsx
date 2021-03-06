import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../App";
import { TeamType } from "../data-types";

export default function Teams() {
  const { teams, handleRemove } = useContext(WrapperContext);
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <h3>Teams Page</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((item: TeamType, index: number) => (
            <tr key={index}>
              <td>
                <Link to={`/members?id=${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.member_count}</td>
              <td>
                <Link to={`/edit?type=team&id=${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td><button onClick={() => handleRemove('team', item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="actions">
        <Link to="/create?type=team">
          <button>Add Team</button>
        </Link>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}
