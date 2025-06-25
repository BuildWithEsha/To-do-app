import './CSS/Todoitems.css';

export const Todoitems = ({ no, text, done, onToggle, onDelete }) => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
        {/* Circle toggle */}
        <div
          className={`custom-circle ${done ? 'filled' : ''}`}
          onClick={() => onToggle(no)}
        ></div>

        {/* Task text */}
        <div className={`todoitems-text ${done ? 'done' : ''}`}>
          {text}
        </div>
      </div>

      {/* Favicon-style dustbin icon */}
      <div className='dustbin' onClick={() => onDelete(no)}></div>
    </div>
  );
};
