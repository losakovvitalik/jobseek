import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';
import ConfirmPopup, { ConfirmPopupProps } from '../confirm-popup';

const renderConfirmPopup = (props: ConfirmPopupProps = { title: 'заголовок' }) => {
  return render(
    <ConfirmPopup {...props}>
      <button>Открыть</button>
    </ConfirmPopup>,
  );
};

const getTrigger = (name = /открыть/i) => screen.getByRole('button', { name });
const getCancel = () => screen.getByRole('button', { name: /отменить/i });
const getConfirm = () => screen.getByRole('button', { name: /подтвердить/i });

describe('ConfirmPopup', () => {
  it('renders children and hidden by default', () => {
    renderConfirmPopup();

    expect(getTrigger()).toBeInTheDocument();

    const dialog = screen.queryByRole('alertdialog');
    expect(dialog).not.toBeInTheDocument();
  });

  it('opens dialog when clicked', async () => {
    renderConfirmPopup();

    const btn = getTrigger();
    await userEvent.click(btn);

    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toBeInTheDocument();
  });

  it('is visible immediately', async () => {
    renderConfirmPopup({ title: 'заголовок', open: true });

    expect(screen.queryByText(/заголовок/i)).toBeInTheDocument();
  });

  it('closes dialog when clicked', async () => {
    const fn = vitest.fn();
    renderConfirmPopup({
      title: 'заголовок',
      onOpenChange: fn,
      open: true,
    });

    const cancelBtn = getCancel();
    await userEvent.click(cancelBtn);

    expect(fn).toHaveBeenCalledWith(false);
    fn.mockClear();

    const confirmBtn = getConfirm();
    await userEvent.click(confirmBtn);

    expect(fn).toHaveBeenCalledWith(false);
  });

  it('calls onCancel when clicked', async () => {
    const fn = vitest.fn();
    renderConfirmPopup({
      title: 'заголовок',
      onCancel: fn,
      open: true,
    });

    const cancelBtn = screen.getByRole('button', { name: /отменить/i });
    await userEvent.click(cancelBtn);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('calls onConfirm when clicked', async () => {
    const fn = vitest.fn();
    renderConfirmPopup({
      open: true,
      onConfirm: fn,
      title: 'заголовок',
    });

    const confirmBtn = screen.getByRole('button', { name: /подтвердить/i });
    await userEvent.click(confirmBtn);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('has role alertdialog', () => {
    renderConfirmPopup({
      open: true,
      title: 'заголовок',
    });

    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('renders description when it passed', () => {
    renderConfirmPopup({
      title: 'заголовок',
      description: 'описание',
      open: true,
    });

    expect(screen.getByText(/описание/i)).toBeInTheDocument();
  });

  it('has role alertdialog and correct aria-labelledby/aria-describedby', () => {
    renderConfirmPopup({
      title: 'Заголовок',
      description: 'Описание',
      open: true,
    });

    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: /заголовок/i });
    const desc = screen.getByText(/описание/i);

    expect(dialog).toHaveAttribute('aria-labelledby', title.id);
    expect(dialog).toHaveAttribute('aria-describedby', desc.id);
  });
});
