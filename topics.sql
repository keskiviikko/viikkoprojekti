CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    title varchar(255) NOT NULL,
    tag varchar(255) NOT NULL,
    notes varchar(255),
    src varchar(255),
    timeToMaster int,
    weeksStudied int,
    startDay date,
    progress boolean,
    complDay date
);
