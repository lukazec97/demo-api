const initialQuery = `
CREATE schema IF NOT EXISTS time_sheet_db;
drop table if exists timesheets;
create table if not exists timesheets(
    id int primary key auto_increment not null,
    title varchar(255)not null,
    hours varchar(255) not null,
    date date not null
);
INSERT INTO timesheets(title, hours, date) VALUES ('Ticket system integration', '1', '2021-06-09'),('Integration with Google Maps API', '2', '2021-06-09');`
;
module.exports =initialQuery;