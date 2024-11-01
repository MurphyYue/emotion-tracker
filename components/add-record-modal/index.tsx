import { X } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AddRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

const FormSchema = z.object({
  content: z
    .string()
    .min(10, {
      message: "description must be at least 10 characters.",
    })
    .max(800, {
      message: "description must not be longer than 80 characters.",
    }),
});

export default function AddRecordModal({
  isOpen,
  onClose,
  onSaved,
}: AddRecordModalProps) {
  if (!isOpen) return null;

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const save = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
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
            ...data,
          }),
        }
      );
      if (response.ok) {
        onSaved();
        console.log("Record saved successfully");
      } else {
        console.error("Failed to save record");
      }
    } finally {
      setIsLoading(false);
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(save)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your emotion here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription onClick={() => {
                    onClose();
                  }}>
                    Otherwise, you can chat with me.<span className="ml-1">→</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{isLoading ? "Saving..." : "Save"}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
