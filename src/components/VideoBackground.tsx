export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
      {/* 2. The Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        {/* If video is in public/background.mp4, reference it like this: */}
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
