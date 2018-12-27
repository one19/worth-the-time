import React from 'react';
import { NumberInput } from 'a-plus-forms';
import { Form, Select } from 'zoo/forms';

const YEAR = 60 * 60 * 24 * 364.25;
const time = {
  second: 1,
  minute: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
  week: 7 * 24 * 60 * 60,
  month: 30 * 24 * 60 * 60,
  year: YEAR,
};
const options = Object.keys(time).map(e => ({ label: e, value: time[e] }));

const onSubmit = ({ timeShaved, timeShavedUnit, timesPer, timesPerUnit }) => {
  const secondsShaved =
    timeShaved * timeShavedUnit * (timesPer / timesPerUnit) * 5 * YEAR;

  const prettyTime = Object.keys(time).reduce(
    (result, unit) => {
      if (secondsShaved > time[unit])
        return { time: Math.round(secondsShaved / time[unit]), unit };
      return result;
    },
    { time: secondsShaved, unit: 'second' }
  );

  window.alert(
    `over 5 years, you'll break even if it takes you < ~${prettyTime.time} ${
      prettyTime.unit
    }s`
  );
};

const CalculatorForm = () => (
  <Form onSubmit={onSubmit}>
    <NumberInput name="timeShaved" label="Time shaved off:" />
    <Select name="timeShavedUnit" label="unit:" options={options} />
    <NumberInput name="timesPer" label="How often the task is done" />
    <Select name="timesPerUnit" label="per:" options={options} />
    <button type="submit">submit</button>
  </Form>
);

export default CalculatorForm;
