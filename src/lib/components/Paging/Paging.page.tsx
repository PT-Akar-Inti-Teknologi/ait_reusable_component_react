import { twMerge } from "tailwind-merge";

import { Theme } from "./Paging.theme";
import { PagingProps } from "./Paging.types";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { pagingSizeMaster } from "./Paging.templates";

function Paging({
  total: totalProp,
  size: sizeProp,
  page: pageProp,
  onChangePage,
  className,
  loading,
  ...props
}: Readonly<PagingProps>) {

  const page = Math.max(+pageProp || 1, 1);
  const total = Math.max(+totalProp || 0, 1);
  const size = Math.max(+sizeProp || 10, 1);

  const totalPage = total;
  const isStartPage = page < 5;
  const isLessPage = totalPage <= 7;
  const isEndPage = !isLessPage && (page > (totalPage - 4));

  const handleChangePage = (data: Record<string, number>) => {
    onChangePage({
      size,
      page,
      ...data
    });
  };

  const getLabelPage = (index: number) => {
    if (isStartPage || isLessPage) {
      return index + 2;
    }
    if (isEndPage) {
      return (totalPage - 4) + index;
    }
    return (page - 1) + index;
  }

  const renderItem = (_: any, index: number) => {
    const currentPage = getLabelPage(index);
    return (!page) ?
      null :
      <Button
        onChangePage={handleChangePage}
        active={currentPage === page}
        page={currentPage}
        key={currentPage}
        {...{ loading }}
      />;
  };

  const getPageLength = () => {
    let pageLength = 3;
    if (isLessPage) {
      pageLength = 5;
    } else if (isStartPage || isEndPage) {
      pageLength = 4;
    }
    return Math.min(totalPage - 2, pageLength);
  };

  return (
    <div className={twMerge(Theme.container, className)} {...props}>
      <select
        onChange={(_) => handleChangePage({ size: +_.target.value, page: 1 })}
        className={twMerge(Theme.select)}
        value={size}
      >
        {pagingSizeMaster.map((_) => <option key={_}>{_}</option>)}
      </select>

      <div className={twMerge(Theme.paging)}>
        <button
          className={twMerge(Theme.button, loading && Theme.buttonLoading)}
          disabled={loading || page === 1}
          onClick={() => handleChangePage({ page: page - 1 })}
          key="prev"
        >
          <ChevronLeftIcon />
        </button>
        <Button
          onChangePage={handleChangePage}
          active={page === 1}
          page={1}
          key="first"
          {...{ loading }}
        />
        <Etc visible={!isLessPage && !isStartPage} />
        {Array.from({ length: getPageLength() }, renderItem)}
        <Etc visible={!isLessPage && !isEndPage} />
        {(totalPage > 1) && (
          <Button
            onChangePage={handleChangePage}
            active={page === totalPage}
            page={totalPage}
            key="last"
            {...{ loading }}
          />
        )}
        <button
          className={twMerge(Theme.button, loading && Theme.buttonLoading)}
          disabled={loading || (page === totalPage)}
          onClick={() => handleChangePage({ page: page + 1 })}
          key="next"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

interface ButtonProps {
  onChangePage: (data: Record<string, number>) => void;
  disabled?: boolean
  loading?: boolean
  active?: boolean
  page: number
}
function Button({
  onChangePage,
  disabled,
  loading,
  active,
  page
}: Readonly<ButtonProps>) {

  return (
    <button
      disabled={disabled || loading || active}
      onClick={() => onChangePage({ page: page })}
      className={twMerge(
        Theme.button,
        loading && Theme.buttonLoading,
        active && Theme.buttonActive
      )}
    >
      {page}
    </button>
  );
}

function Etc(props: { visible: boolean }) {

  return (props.visible) ? (
    <span className={twMerge(Theme.separator)}>...</span>
  ) : null;
}

Paging.defaultProps = {
  size: 10,
  total: 0,
  page: 1
} as PagingProps;

export { Paging }
