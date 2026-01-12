import { cn } from "@/utils/string";

interface FormFieldProps {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: "text" | "textarea";
}

export const FormField = ({
  label,
  required,
  placeholder,
  type = "text",
}: FormFieldProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <FormLabel label={label} required={required} />
      {type === "text" ? (
        <InputField placeholder={placeholder} />
      ) : (
        <TextAreaField placeholder={placeholder} />
      )}
    </div>
  );
};

export const InputField = ({ placeholder }: { placeholder: string }) => {
  const styling = cn(
    "w-full rounded-2xl px-6 py-4 bg-[#141313] focus:border focus:border-[#FAFAFA]",
  );

  return <input type="text" placeholder={placeholder} className={styling} />;
};

export const TextAreaField = ({ placeholder }: { placeholder: string }) => {
  const styling = cn(
    "w-full min-h-40 rounded-2xl px-6 py-4 bg-[#141313] focus:border focus:border-[#FAFAFA] outline-none",
  );

  return <textarea placeholder={placeholder} className={styling} />;
};

const FormLabel = ({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) => {
  return (
    <label className="text-sm flex items-center gap-1">
      <span>{label}</span>
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};
