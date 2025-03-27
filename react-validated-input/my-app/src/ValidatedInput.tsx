import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const getValidationMessage = () => {
    if (!password) return 'A password is required.';
    if (password.length < 8) return 'Your password is too short.';
    return '';
  };

  const getSpan = () => {
    if (!password || password.length < 8) {
      return <span className="wrong"> ❌ </span>;
    }
    return <span className="correct"> ✅ </span>;
  };
  // const span = getSpan();
  // const validationMessage = getValidationMessage();
  return (
    <div className="absolute inset-y-0 right-2 flex items-center">
      <span className="text-gray-700"> Password :</span>
      <input
        className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded"
        type="password"
        value={password}
        onChange={handleChange}
      />

      {getSpan()}
      {/* span */}
      <div>
        <span className="wrong" style={{ color: 'red' }}>
          {getValidationMessage()}
          {/* validationMessage */}
        </span>
      </div>
    </div>
  );
}
