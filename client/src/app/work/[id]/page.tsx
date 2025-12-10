export default function ProjectCoveragePage() {
  return <div className="w-full flex flex-col px-8"></div>;
}

const LandingSection = () => {
  return (
    <section className="w-full h-fit grid grid-cols-2">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h1>PROJECT 6</h1>
          <p>
            This is a project description, used to describe the project. The
            description describes the project so that anyone can describe what
            the project is by reading the description
          </p>
        </div>
        <div className="grid grid-cols-2">
          <span>Client:</span>
          <span>Client Name</span>
          <span>Tag:</span>
          <span>Portrait Photography</span>
          <span>Year:</span>
          <span>2025</span>
        </div>
      </div>
      <div></div>
    </section>
  );
};
