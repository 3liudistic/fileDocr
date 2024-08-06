import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
    
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-center md:text-5xl">
          Convert files online for free
        </h1>
        <p className="text-center text-muted-foreground text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
        Meet FileDocr – your ultimate online solution for unlimited and free multimedia conversions. Effortlessly convert images, audio, and videos without any limitations. Begin converting today and simplify your content management with <FileDocr></FileDocr>!"
        </p>
      </div>
      <Dropzone />
    </div>
  );
}
