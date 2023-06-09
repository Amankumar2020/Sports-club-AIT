import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useRouter } from "next/router";


export default function EventsCard({
  title,
  description,
  demo,
  large,
  link,
  registrationOpen
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  link: string;
  registrationOpen?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className={`min-h-96 relative col-span-1  overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="mt-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 px-4 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
        <div className="mb-4">
          <button
            onClick={() => router.push(link)}
            className={`${
              !registrationOpen && "pointer-events-none opacity-50"
            } focus:shadow-outline rounded bg-gray-800 py-2 px-4 font-normal text-white hover:bg-gray-900 focus:outline-none`}
          >
            {registrationOpen && "Register"}
            {!registrationOpen && "Registeration Closed"}
          </button>
        </div>
      </div>
    </div>
  );
}
