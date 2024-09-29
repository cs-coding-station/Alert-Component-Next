import Alert from "@/components/Alert";

const text = "Some text information";
export default function Home() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <Alert text={text} closable />
      <Alert type="success" text={text} closable />
      <Alert type="info" text={text} closable />
      <Alert type="warning" text={text} closable />
      <Alert type="error" text={text} closable />
    </div>
  );
}
