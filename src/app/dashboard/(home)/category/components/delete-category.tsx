"use client"

import { FC } from "react"
import Swal from "sweetalert2"
import { deleteCategory } from "../lib/action"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"


interface DeleteCategoryPageProps {
    id: number
}


 const DeleteCategoryPage: FC<DeleteCategoryPageProps> = ({id}) => {

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Apakah Anda Yakin",
            text: "Kategari ini akan dihapus secara permanent",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Silahkan dihapus.',
        });

        if (result.isConfirmed) {
            try {
                await deleteCategory(id);
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Kategori Berhasil dihapus.",
                    toast: true,
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  window.location.reload();
            } catch (error: any) {
                
                if (error.status == 500) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: error.response.data.message,
                        toast: true,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: "ID Category tidak ada",
                        toast: true,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    
                }

            }
        }
    };

    return (
        <Button size={"sm"} variant={"destructive"} onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" />
            Hapus
        </Button>
    )
}

export default DeleteCategoryPage;