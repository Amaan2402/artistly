"use client";

import React from "react";

interface ReusableTableProps<T> {
  data: T[];
  columns: {
    label: string;
    key: keyof T;
  }[];
  renderActions?: (row: T) => React.ReactNode;
}

export default function ReusableTable<T extends { id: number | string }>({
  data,
  columns,
  renderActions,
}: ReusableTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[800px] w-full border-collapse text-left">
        <thead className="border-b dark:border-[#2a2b2f]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className="px-4 py-3 font-medium text-xs sm:text-sm text-gray-300 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
            {renderActions && (
              <th className="px-4 py-3 font-medium text-xs sm:text-sm text-gray-300">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b dark:border-[#2a2b2f] transition"
            >
              {columns.map((col) => (
                <td
                  key={col.key as string}
                  className="px-4 py-3 whitespace-nowrap text-xs sm:text-base"
                >
                  {String(row[col.key])}
                </td>
              ))}
              {renderActions && (
                <td className="px-4 py-3">{renderActions(row)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
