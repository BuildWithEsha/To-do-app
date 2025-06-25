import './CSS/Todoitems.css';

export const Todoitems = ({ no, text, done, onToggle, onDelete }) => {
  if (!text) return null; // ✅ Prevent rendering an empty task

  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
        <div
          className={`custom-circle ${done ? 'filled' : ''}`}
          onClick={() => onToggle(no)}
        ></div>

        <div className={`todoitems-text ${done ? 'done' : ''}`}>
          {text}
        </div>
      </div>

      {/* Only render if text exists */}
      {text && (
        <div className='dustbin' onClick={() => onDelete(no)}></div>
      )}
    </div>
  );
};
