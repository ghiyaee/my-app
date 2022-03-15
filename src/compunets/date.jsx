import "./date.css"
const Date = (props) => {
  const{date}=props
     const moun = date.toLocaleString("fa-IR", { month: "long" });
     const day = date.toLocaleString("fa-IR", { day: "2-digit" });
    const  year = date.toLocaleString("fa-IR", { year: "numeric" });
    return (
      <div className="date">
        <div>{moun}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    );
}

export default Date