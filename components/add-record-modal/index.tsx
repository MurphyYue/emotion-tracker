import { X } from "lucide-react";

interface AddRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddRecordModal({
  isOpen,
  onClose,
}: AddRecordModalProps) {
  if (!isOpen) return null;
  const save = async () => {
    const description = (
      document.querySelector("textarea") as HTMLTextAreaElement
    ).value;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/record`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "1",
          userName: "murphy1",
          content: description,
        }),
      }
    );
    if (response.ok) {
      onClose();
      console.log("Record saved successfully");
    } else {
      console.error("Failed to save record");
    }
  };
  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="p-4">
        {/* Modal header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">what's on your emotion?</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal content/form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          <div className="space-y-4">
            {/* <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md"
                placeholder="Enter title"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md h-32"
                placeholder="Enter description"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
