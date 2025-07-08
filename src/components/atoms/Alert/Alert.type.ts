export type AlertProps = {
    title: string;
    message?: string;
    className?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onClose?: () => void;
    position?: 'tLeft' | 'tRight' | 'bLeft' | 'bRight'; 
}

