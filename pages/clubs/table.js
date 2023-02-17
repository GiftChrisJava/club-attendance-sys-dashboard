import { useState } from "react";
import styles from "../../styles/table.module.css";
const table = ({ data }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleMemberChange = (event) => {
    setSelectedMember(event.target.value);
    setSelectedDate(null);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const renderDateOptions = (member) => {
    return member.attendances.map((attendance) => (
      <option key={attendance.id} value={attendance.attendedOn}>
        {attendance.attendedOn + " - " + attendance.attended}
      </option>
    ));
  };

  const renderMemberRows = () => {
    return data.members.map((member) => (
      <tr className={styles.tr} key={member.id}>
        <td className={styles.td}>{member.name}</td>
        <td className={styles.td}>{member.email}</td>
        <td className={styles.td}>
          <select
            className={styles.select}
            value={selectedDate || " "}
            onChange={handleDateChange}
            disabled={!selectedMember}
          >
            {selectedMember && renderDateOptions(member)}
          </select>
        </td>
      </tr>
    ));
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Full Name</th>
            <th className={styles.th}>Email Address</th>
            <th className={styles.th}>Attended Dates & True Value</th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.tr}>
            <td colSpan="3">
              <select
                className={styles.select}
                value={selectedMember || ""}
                onChange={handleMemberChange}
              >
                <option value="" disabled>
                  select member
                </option>
                {data.members.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          {renderMemberRows()}
        </tbody>
      </table>
    </div>
  );
};

export default table;
