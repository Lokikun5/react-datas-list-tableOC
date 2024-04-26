import React, { useState, useEffect } from 'react';
import TableHeader from "../components/TableHeader";
import TableMain from "../components/TableMain";
import TableFooter from "../components/TableFooter";
import { paginate } from "../utils/pagination";
import { reorderSort } from "../utils/reorder";
import { searchItems } from "../utils/search";
import "../style/style.scss";

function DataListTable({items,columnConfigs, initialSortKey = 'defaultKey',
                            initialSortDirection = 'ascending',
                            initialPageSize = 10 }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [entries, setEntries] = useState(initialPageSize);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: initialSortKey, direction: initialSortDirection });
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredItems = searchItems(items, search);
        const sortedItems = reorderSort(filteredItems, sortConfig.key, sortConfig.direction);
        setPaginatedItems(paginate(sortedItems, entries, currentPage));
    }, [items, currentPage, entries, sortConfig, search]);

    const handleEntriesChange = (e) => {
        setEntries(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSort = (key) => {
        if (!key) {
            console.error("Undefined sort key received:", key);
            return;
        }
        const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <section>
            <TableHeader onEntriesChange={handleEntriesChange}
                         onSearchChange={handleSearch} />
            <TableMain items={paginatedItems}
                       columnConfigs={columnConfigs}
                       handleSort={handleSort}
                       sortConfig={sortConfig} />
            <TableFooter currentPage={currentPage}
                         pageSize={entries}
                         totalItems={items.length}
                         onPageChange={handlePageChange} />
        </section>
    );
}

export default DataListTable;