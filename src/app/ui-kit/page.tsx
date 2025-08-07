import { Plus } from 'lucide-react';

import { Button } from '@/shared/components/button/Button';
import { ButtonVariants } from '@/shared/components/button/Button.types';

export default function UIkitPage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-primary dark:text-primary-dark headingM p-2">UI Kit Page</h1>
      {/* Buttons */}
      <div className="flex flex-col items-center justify-center w-full gap-2 p-2">
        <h1>Buttons:</h1>
        <Button
          variant={ButtonVariants.primary}
          className="!px-2"
          icon={
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-surface text-primary">
              <Plus size={16} strokeWidth={4} />
            </span>
          }
        >
          <span className="mr-2">New Invoice</span>
        </Button>
        <Button variant={ButtonVariants.primary}>Mark as Paid</Button>
        <Button variant={ButtonVariants.secondary}>Edit</Button>
        <Button variant={ButtonVariants.dark}>Save as Draft</Button>
        <Button variant={ButtonVariants.warning}>Delete</Button>
        <div className="w-[300px]">
          <Button
            variant={ButtonVariants.secondary}
            icon={<Plus size={18} strokeWidth={3} />}
            fullWidth
          >
            Add New Item
          </Button>
        </div>
      </div>
    </div>
  );
}
