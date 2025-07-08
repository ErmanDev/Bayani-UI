import { useState } from 'react';
import { Button, Card } from './components';
import { Alert } from './components/atoms/Alert';

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Bayani UI - Atomic</h1>
      <p className="text-gray-700">
        This is a simple atomic design system built with React and Tailwind CSS.
      </p>
      <div className="flex gap-5">
        <div>
          <Button
            label="Secondary"
            variant="secondary"
            onClick={() => setShowAlert(true)}
          />

          {showAlert && (
            <Alert
              onClose={() => setShowAlert(false)}
              duration={2000}
              title="test alert"
              variant="success"
              message="You clicked the Secondary button!"
              position="bRight"
            />
          )}
        </div>
        <Button
          label="Secondary"
          variant="secondary"
          onClick={() => alert('Secondary Clicked')}
        />
        <Button label="Danger" variant="danger" />
        <Button
          label="Outline Button"
          variant="outline"
          onClick={() => alert('Outline!')}
        />
      </div>
      <Card
        title="Another Card"
        description="You can put any children inside, like buttons, inputs, etc."
      >
        <Button label="Outline" variant="outline" />
      </Card>
    </div>
  );
}
