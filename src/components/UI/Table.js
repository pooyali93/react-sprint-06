import './Table.scss';

export default function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>THursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Time">09:00</td>
          <td data-label="Customer">Pooya Ali</td>
          <td data-label="Make">BMW</td>
          <td data-label="Model">428i</td>
          <td data-label="Salesperson">David Malik</td>
          <td data-label="Contact">07411212010</td>
        </tr>
      </tbody>
    </table>
    
  );
}
