import Link from "next/link";
import { Eye, Pencil, Trash2, Plus, FileText } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

/* =====================================================
   Delete Offer Letter
===================================================== */

async function deleteOfferLetterAction(formData: FormData) {
    "use server";

    const id = formData.get("id") as string;

    if (!id) {
        return;
    }

    await prisma.offerLetter.delete({
        where: {
            id,
        },
    });
}

/* =====================================================
   Page
===================================================== */

export default async function OfferLettersPage() {
    /* =====================================================
       Get Offer Letters
    ===================================================== */

    const offerLetters = await prisma.offerLetter.findMany({
        orderBy: {
            createdAt: "desc",
        },

        include: {
            company: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });

    /* =====================================================
       Status Colors
    ===================================================== */

    const statusColors: Record<string, string> = {
        draft:
            "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",

        generated:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

        sent:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",

        accepted:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",

        rejected:
            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",

        cancelled:
            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    };

    /* =====================================================
       Page
    ===================================================== */

    return (
        <div className="p-4 sm:p-6 space-y-6">

            {/* =================================================
          Header
      ================================================= */}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                        Offer Letters
                    </h1>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Manage candidate offer letters and internship documents.
                    </p>
                </div>

                <Button
                    asChild
                    variant="primary"
                    size="sm"
                    className="glass-effect shadow-md w-full sm:w-auto"
                >
                    <Link href="/offer-letter/new">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Offer Letter
                    </Link>
                </Button>

            </div>

            {/* =================================================
          Table
      ================================================= */}

            <div className="glass-effect border-border rounded-2xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        {/* =================================================
                Table Header
            ================================================= */}

                        <thead className="bg-muted/20 border-b border-border">

                            <tr>

                                {/* Candidate */}

                                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Candidate
                                </th>

                                {/* Reference */}

                                <th className="hidden sm:table-cell px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Reference
                                </th>

                                {/* Position */}

                                <th className="hidden md:table-cell px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Position
                                </th>

                                {/* Company */}

                                <th className="hidden lg:table-cell px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Company
                                </th>

                                {/* Joining Date */}

                                <th className="hidden lg:table-cell px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Joining Date
                                </th>

                                {/* Status */}

                                <th className="hidden md:table-cell px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Status
                                </th>

                                {/* Actions */}

                                <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        {/* =================================================
                Table Body
            ================================================= */}

                        <tbody className="divide-y divide-border">

                            {offerLetters.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={7}
                                        className="px-3 sm:px-6 py-8 sm:py-10 text-center"
                                    >

                                        <div className="flex flex-col items-center justify-center">

                                            <FileText className="w-10 h-10 text-muted-foreground mb-3" />

                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                No offer letters found.
                                            </p>

                                            <Button
                                                asChild
                                                variant="primary"
                                                size="sm"
                                                className="mt-4"
                                            >
                                                <Link href="/offer-letter/new">
                                                    <Plus className="w-4 h-4 mr-2" />
                                                    Create Offer Letter
                                                </Link>
                                            </Button>

                                        </div>

                                    </td>

                                </tr>

                            ) : (

                                offerLetters.map((offerLetter) => (

                                    <tr
                                        key={offerLetter.id}
                                        className="hover:bg-muted/10 transition-colors"
                                    >

                                        {/* =================================================
                        Candidate
                    ================================================= */}

                                        <td className="px-3 sm:px-6 py-3 sm:py-4">

                                            <div className="flex items-center gap-2 sm:gap-3">

                                                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-primary-foreground flex-shrink-0">

                                                    <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4" />

                                                </div>

                                                <div className="min-w-0">

                                                    <p className="font-medium text-foreground text-xs sm:text-sm truncate">
                                                        {offerLetter.candidateName}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground truncate">
                                                        {offerLetter.candidateEmail || "—"}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* =================================================
                        Reference
                    ================================================= */}

                                        <td className="hidden sm:table-cell px-6 py-4">

                                            <span className="text-sm font-medium text-foreground">
                                                {offerLetter.referenceNo}
                                            </span>

                                        </td>

                                        {/* =================================================
                        Position
                    ================================================= */}

                                        <td className="hidden md:table-cell px-6 py-4">

                                            <div>

                                                <p className="text-sm font-medium text-foreground">
                                                    {offerLetter.position}
                                                </p>

                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {offerLetter.duration}
                                                </p>

                                            </div>

                                        </td>

                                        {/* =================================================
                        Company
                    ================================================= */}

                                        <td className="hidden lg:table-cell px-6 py-4">

                                            <span className="text-sm text-foreground">
                                                {offerLetter.company?.name || "—"}
                                            </span>

                                        </td>

                                        {/* =================================================
                        Joining Date
                    ================================================= */}

                                        <td className="hidden lg:table-cell px-6 py-4">

                                            <span className="text-sm text-muted-foreground">
                                                {new Date(
                                                    offerLetter.joiningDate
                                                ).toLocaleDateString("en-IN", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>

                                        </td>

                                        {/* =================================================
                        Status
                    ================================================= */}

                                        <td className="hidden md:table-cell px-6 py-4">

                                            <span
                                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[
                                                    offerLetter.status.toLowerCase()
                                                    ] ||
                                                    "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
                                                    }`}
                                            >
                                                {offerLetter.status}
                                            </span>

                                        </td>

                                        {/* =================================================
                        Actions
                    ================================================= */}

                                        <td className="px-3 sm:px-6 py-3 sm:py-4">

                                            <div className="flex items-center justify-end gap-1 sm:gap-2">

                                                {/* View */}

                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-7 w-7 sm:h-8 sm:w-8 border-border hover:bg-muted/50"
                                                    asChild
                                                >
                                                    <Link
                                                        href={`/documents/offer-letter/${offerLetter.id}`}
                                                    >
                                                        <Eye className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-muted-foreground" />
                                                    </Link>
                                                </Button>

                                                {/* Edit */}

                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-7 w-7 sm:h-8 sm:w-8 border-border hover:bg-muted/50"
                                                    asChild
                                                >
                                                    <Link
                                                        href={`/documents/offer-letter/${offerLetter.id}/edit`}
                                                    >
                                                        <Pencil className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-muted-foreground" />
                                                    </Link>
                                                </Button>

                                                {/* Delete */}

                                                <form action={deleteOfferLetterAction}>

                                                    <input
                                                        type="hidden"
                                                        name="id"
                                                        value={offerLetter.id}
                                                    />

                                                    <Button
                                                        type="submit"
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-7 w-7 sm:h-8 sm:w-8 border-border hover:bg-destructive/20 hover:text-destructive"
                                                    >
                                                        <Trash2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-muted-foreground" />
                                                    </Button>

                                                </form>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

                {/* =================================================
            Footer
        ================================================= */}

                <div className="p-3 sm:p-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">

                    <span>
                        Showing 1 to {offerLetters.length} of{" "}
                        {offerLetters.length} entries
                    </span>

                </div>

            </div>

        </div>
    );
}