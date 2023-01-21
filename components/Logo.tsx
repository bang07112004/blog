function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        src=""
        alt="Logo"
        className="rounded-full object-cover"
        width={50}
        height={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
