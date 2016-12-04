begin
  delete from employees;
  insert into employees 
    select * from employees_backup;
  commit;
end;