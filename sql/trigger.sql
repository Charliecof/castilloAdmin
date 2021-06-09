create function restante() returns Trigger Language plpgsql as $$ Begin
Insert into pagos
values(new.total, 0, new.total, new.fecha, new.id);
return new;
END;
$$ create Trigger restante_tr
after
Insert on eventos for each row execute procedure restante();