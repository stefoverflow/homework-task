import clsx from 'clsx';

export interface CardProps {
    title: string;
    text: string;
    link?: string;
}

export const Card = ({ title, text, link }: CardProps) => (
    <div
        className={clsx(
            'flex',
            'flex-col',
            'gap-4',
            'p-4',
            'bg-white',
            'py-6',
            'px-4',
            'rounded-2xl'
        )}
    >
        <h2
            className={clsx(
                'text-black',
                'text-2xl',
                'leading-normal',
                'font-medium'
            )}
        >
            {title}
        </h2>
        <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
            {text}
        </p>
        {link && (
            <a
                href={link}
                className={clsx(
                    'mt-auto',
                    'flex',
                    'items-center',
                    'text-primary',
                    'gap-2.5'
                )}
            >
                View solution
                <img src="/media/landing/arrow-purple.svg" alt="" />
            </a>
        )}
    </div>
);
