
import FormCategoryPage from "../components/form-category";

function page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold"> Tambah Katergory</div>
      </div>

      <FormCategoryPage type="ADD" />
    </div>
  );
}

export default page;
