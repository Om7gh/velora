"use client";

import Modal from "@/Components/shared/Modal";
import { Button } from "@/Components/ui/Button";
import { sendHomeData } from "@/services/Portfolio/homeApis";
import useStore from "@/store/veloraStore";
import { BadgeCheck, ChevronsDown, MoveLeft, MoveRight } from "lucide-react";
import {
  ChangeEvent,
  DragEvent,
  ReactNode,
  SubmitEvent,
  useRef,
  useState,
} from "react";
import { FaCamera, FaFilePdf, FaTimes, FaUpload } from "react-icons/fa";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-2 h-full relative">
      <GetStartedPage />
      <div className="h-full w-[0.1px] bg-primary/20 absolute left-1/2 -translate-x-1/2" />
      <ProgressSection />
    </div>
  );
}

type SectionConfig = {
  name: string;
  render: () => ReactNode;
  onSubmit: (formData: FormData) => Promise<void>;
};

async function submitHomeSection(formData: FormData) {
  const avatar = formData.get("avatar");
  const resume = formData.get("resume");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const title = String(formData.get("title") ?? "").trim();

  if (!title) {
    throw new Error("Please add your title before continuing.");
  }

  if (!(avatar instanceof File) || avatar.size === 0) {
    throw new Error("Please upload an avatar image.");
  }

  // if (!(resume instanceof File) || resume.size === 0) {
  //   throw new Error("Please upload your resume as a PDF.");
  // }

  if (typeof firstName !== "string" || !firstName.trim()) {
    throw new Error("Please enter your first name.");
  }

  if (typeof lastName !== "string" || !lastName.trim()) {
    throw new Error("Please enter your last name.");
  }

  await sendHomeData(formData);
}

async function submitSectionWithoutApi(_: FormData) {
  return;
}

function SectionPlaceholderForm({ name }: { name: string }) {
  return (
    <div className="h-full grid place-items-center text-center px-6">
      <div className="space-y-2">
        <p className="text-2xl font-semibold">{name} form</p>
        <p className="text-foreground/60">
          This section is ready for its own fields and API integration.
        </p>
      </div>
    </div>
  );
}

const SectionDataList: SectionConfig[] = [
  {
    name: "Home",
    render: () => <HomeForm />,
    onSubmit: submitHomeSection,
  },
  {
    name: "About",
    render: () => <SectionPlaceholderForm name="About" />,
    onSubmit: submitSectionWithoutApi,
  },
  {
    name: "Experience",
    render: () => <SectionPlaceholderForm name="Experience" />,
    onSubmit: submitSectionWithoutApi,
  },
  {
    name: "Projects",
    render: () => <SectionPlaceholderForm name="Projects" />,
    onSubmit: submitSectionWithoutApi,
  },
  {
    name: "Skills",
    render: () => <SectionPlaceholderForm name="Skills" />,
    onSubmit: submitSectionWithoutApi,
  },
  {
    name: "Education",
    render: () => <SectionPlaceholderForm name="Education" />,
    onSubmit: submitSectionWithoutApi,
  },
  {
    name: "Contact",
    render: () => <SectionPlaceholderForm name="Contact" />,
    onSubmit: submitSectionWithoutApi,
  },
];

function ProgressSection() {
  const { progress } = useStore();
  const percentage = Math.min((progress * 100) / SectionDataList.length, 100);
  return (
    <div className="flex flex-col items-center justify-center relative bg-surface">
      <div className="w-full h-1 bg-gray-200 rounded-xl overflow-hidden absolute top-0">
        <div
          className="h-full bg-secondary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="space-y-8">
        {SectionDataList.map((section, i) => {
          return (
            <SectionTitle
              title={section.name}
              isCompleted={progress > i}
              key={section.name}
            />
          );
        })}
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  isCompleted,
}: {
  title: string;
  isCompleted: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 text-2xl`}>
      <BadgeCheck
        className={`size-8 flex items-center gap-4 ${isCompleted ? "text-primary" : "text-foreground/30"}`}
      />
      <p
        className={`flex items-center gap-4 ${isCompleted ? "text-primary font-bold" : "text-foreground/30"}`}
      >
        {title}
      </p>
    </div>
  );
}

function HomeForm() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const validateFile = (file: File) => {
    if (file.type !== "application/pdf") {
      return "Only PDF files are allowed.";
    }
    if (file.size > 5 * 1024 * 1024) {
      return "File must be less than 5MB.";
    }
    return "";
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setFile(null);
      return;
    }

    setError("");
    setFile(file);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const dropped = e.dataTransfer.files?.[0];
    if (dropped) handleFile(dropped);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="flex justify-center items-center gap-6 px-4 h-full">
      <AddAvatar />

      <div className="flex flex-col gap-5 flex-1">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Your title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Frontend Developer"
            className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <label
            htmlFor="resume-upload"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            className={`border-2 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition
              ${isDragging ? "border-primary bg-primary/10" : "border-border"}
              ${error ? "border-red-500" : ""}
              hover:border-black`}
          >
            {file ? (
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-500" />
                <span className="text-sm font-medium">{file.name}</span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFile();
                  }}
                  className="ml-2 text-slate-400 hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <>
                <FaUpload className="text-slate-400 text-xl" />
                <p className="text-sm text-slate-500 text-center">
                  Click to upload or drag & drop
                </p>
                <span className="text-xs text-slate-400">
                  PDF only (max 5MB)
                </span>
              </>
            )}
          </label> */}

        {/* <input
            id="resume-upload"
            type="file"
            ref={inputRef}
            accept="application/pdf"
            onChange={onInputChange}
            className="hidden"
            name="resume"
          /> */}

        {/* {error && <span className="text-xs text-red-500">{error}</span>}
        </div> */}
      </div>
    </div>
  );
}

export function AddAvatar() {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="flex items-center  justify-start ">
      <div className="backdrop-blur-xl shadow-2xl rounded-3xl p-2 flex items-center gap-6 bg-background  border border-solid">
        <div
          onClick={() => inputRef.current?.click()}
          className="relative w-full h-42 rounded-xl group cursor-pointer"
        >
          <div className="w-full h-full overflow-hidden ">
            <img
              src={preview ?? "/default.png"}
              alt="avatar preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0  bg-background/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <FaCamera className="text-white text-xl" />
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleAvatar}
          className="hidden"
          name="avatar"
        />
      </div>
    </div>
  );
}

function GetStartedPage() {
  const { progress } = useStore();
  const [openModal, setOpenModal] = useState(false);
  const activeSection = SectionDataList[progress];
  const formName = activeSection?.name ?? "Completed";

  return (
    <>
      {openModal && activeSection && (
        <Modal openModal={() => setOpenModal(false)}>
          <FormWrapper formName={formName} section={activeSection} />
        </Modal>
      )}
      <div className=" flex flex-col items-center justify-center gap-10 h-full">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl ">
            Welcome <span className="text-primary font-bold">Omar</span>
          </h2>
          <p className="text-3xl">
            to{" "}
            <span className="bg-linear-120 from-primary via-secondary to-accent bg-clip-text text-transparent">
              Velora
            </span>{" "}
          </p>
          <h2 className="text-xl ">Let's create your first portfolio</h2>
        </div>

        <div>
          <ChevronsDown className="m-auto my-4 animate-bounce" />
          <div
            onClick={() => {
              if (progress < SectionDataList.length) {
                setOpenModal(true);
              }
            }}
            className=" w-44 px-6 py-3 capitalize tracking-wide  rounded-xl border-primary/50 border-4 border-dotted grid place-items-center group hover:border-secondary cursor-pointer bg-surface/50"
          >
            <p>
              {progress >= SectionDataList.length
                ? "Completed"
                : progress >= 1
                  ? "In Progress..."
                  : "start"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function FormWrapper({
  formName,
  section,
}: {
  formName: string;
  section: SectionConfig;
}) {
  const { progress, setProgress, setPreviousProgress } = useStore();
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    try {
      const formData = new FormData(e.currentTarget);
      await section.onSubmit(formData);
      setProgress();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting this section.";
      setSubmitError(errorMessage);
    }
  }

  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">{section.render()}</div>
      {submitError && (
        <p className="text-red-500 text-sm text-center mt-2">{submitError}</p>
      )}
      <div className="self-end space-x-4 flex justify-between w-full">
        <Button
          label={<MoveLeft />}
          type="secondary"
          htmlType="button"
          onClick={() => setPreviousProgress()}
          className={`${progress < 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
          disabled={progress < 1}
        />
        <Button
          label={<MoveRight />}
          type="primary"
          htmlType="submit"
          disabled={progress >= SectionDataList.length}
          className={`${progress >= SectionDataList.length ? "cursor-not-allowed" : "cursor-pointer"}`}
        />
      </div>
    </form>
  );
}
