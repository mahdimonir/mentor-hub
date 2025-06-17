import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentGetOne } from "../../types";
import { AgentForm } from "./agent-form";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

export const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateAgentDialogProps) => {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Edit Agent"
      description="Edit the agent details."
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
