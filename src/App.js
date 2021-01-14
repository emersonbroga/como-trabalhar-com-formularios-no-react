import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" onChange={handleInputChange} value={formValues.name || ''} />
      <input type="text" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''} />

      <select name="language" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
      </select>

      <div className="radios">
        <label>
          <input
            type="radio"
            value="cafe"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cafe'}
          />
          Café
        </label>
        <label>
          <input
            type="radio"
            value="cha"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cha'}
          />
          Chá
        </label>
      </div>

      <div className="checks">
        <label>
          <input
            type="checkbox"
            name="social"
            value="twitter"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.twitter}
          />
          Twitter
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="instagram"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.instagram}
          />
          Instagram
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="facebook"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.facebook}
          />
          Facebook
        </label>
      </div>

      <textarea name="bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
