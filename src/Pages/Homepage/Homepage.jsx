import styles from "./Homepage.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.logo}>Union</h1>
        <button>Edit</button>
        <div className={styles.text}>
          <h2>Hi Mumtaaz,</h2>
          <p>Here are your daily tasks</p>
        </div>
      </div>
      <main>
        <h3>Tasks</h3>
        <TaskBar />
        <Cards />
      </main>
    </div>
  );
}

function Cards() {
  return (
    <div className={styles.task_container}>
      <div className={styles.card_grid}>
        <Card
          title="Homepage Redesign"
          description="Redesign the homepage of our website to improve user engagement and
align with our updated branding guidelines. Focus on creating an
intuitive user interface with enhanced visual appeal."
          date="October 15 2023"
          state="New Task"
        />
        <Card
          title="Study Economics Midterm"
          description="Cover chapters 1-4 and all lecture notes"
          date="November 28 2023"
          state="In Progress"
        />
        <Card
          title="Finish Discrete Math Assignment"
          description="Cover chapters 1-4 and all lecture notes"
          date="October 2 2023"
          state="Completed"
        />
      </div>
    </div>
  );
}

function Card({ title, description, date, state }) {
  const navigate = useNavigate();

  const data = {
    title: title,
    description: description,
    date: date,
    state: state,
  };

  const toTaskPage = () => {
    navigate("/TaskPage", { state: data });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        toTaskPage();
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.tags}>
        <div className={styles.date}>
          <img src="/src/assets/timer.svg" alt="" />
          <span>{date}</span>
        </div>
        <span className={styles.task_state}>{state}</span>
      </div>
    </div>
  );
}

function TaskBar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <nav className={styles.taskbar}>
      <ul>
        <li
          className={toggleState === 1 ? styles.current_state : ""}
          onClick={() => toggleTab(1)}
        >
          All Tasks
        </li>
        <li
          className={toggleState === 2 ? styles.current_state : ""}
          onClick={() => toggleTab(2)}
        >
          In Progress
        </li>
        <li
          className={toggleState === 3 ? styles.current_state : ""}
          onClick={() => toggleTab(3)}
        >
          Completed
        </li>
      </ul>
    </nav>
  );
}
