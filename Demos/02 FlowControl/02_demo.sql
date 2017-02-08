-- 02_demo.sql
-- Print out the first two parameters
set verify off
set heading off

select &1 as para1, &2 as para2
  from dual;

