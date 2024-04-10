interface FormButtonProps {
  loading: boolean;
  text: string;
}

function FormBtn({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? "로딩 중" : text}
    </button>
  );
}

export default FormBtn;
