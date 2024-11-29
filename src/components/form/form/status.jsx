import { Button } from "@/components/ui/button";
// import { COLORS } from "@/data/Tags";
import { Badge } from "@/components/ui/badge";

const Status = ({ object, statuses, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        Hello <b>{object.name}</b>, your status is currently
      </p>
      <Badge>{statuses[object.roles[object.form]]}</Badge>

      <p data-cy="status-confirmation" className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </p>
      <p data-cy="status-incorrect" className="text-center">
        If you believe that your status is incorrect, please reach out to us
        immediately.
      </p>
      <Button className="bg-cutie-violet" onClick={() => setState(1)}>
        Apply
      </Button>
    </div>
  );
};

export default Status;
