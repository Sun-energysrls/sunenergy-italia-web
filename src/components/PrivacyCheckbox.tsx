import { useState } from "react";

interface PrivacyCheckboxProps {
  accepted: boolean;
  onChange: (accepted: boolean) => void;
  showError?: boolean;
}

const PrivacyCheckbox = ({ accepted, onChange, showError }: PrivacyCheckboxProps) => {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border text-secondary accent-secondary focus:ring-secondary/50 cursor-pointer shrink-0"
        />
        <span className="text-sm text-muted-foreground leading-relaxed">
          Ho letto e accetto l&apos;
          <a
            href="https://www.sunenergysrls.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline hover:text-secondary/80 transition-colors font-medium"
          >
            Informativa Privacy
          </a>{" "}
          ai sensi del Regolamento UE 2016/679.
        </span>
      </label>
      {showError && !accepted && (
        <p className="text-destructive text-xs mt-1.5 ml-7">
          È necessario accettare l'Informativa Privacy per procedere.
        </p>
      )}
    </div>
  );
};

export default PrivacyCheckbox;
