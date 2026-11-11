import { type FC } from 'react';
import { helpModalOpenState } from '../state/ui';
import Modal, { ModalTransition, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import QuestionIcon from 'majesticons/line/question-circle-line.svg?react';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';

const styles = css`
  ul li a,
  h2 a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 16px;

    svg {
      color: #7952e4;
    }
  }
  .developer-badge {
    background: rgba(121, 82, 228, 0.12);
    border: 1px solid rgba(121, 82, 228, 0.3);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
  }
`;

export const HelpModal: FC = () => {
  const [helpModalOpen, setHelpModalOpen] = useAtom(helpModalOpenState);

  return (
    <ModalTransition>
      {helpModalOpen && (
        <Modal onClose={() => setHelpModalOpen(false)}>
          <ModalHeader>
            <ModalTitle>Mitos Studio Help & Support</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div css={styles}>
              <div className="developer-badge">
                <p style={{ margin: 0, fontWeight: 600, color: '#e0e0e0' }}>Developed by Akash Jadon</p>
                <p style={{ margin: '4px 0 0 0', fontSize: 13, color: '#a0a0a0' }}>
                  Visual AI Flow & Node Execution Studio
                </p>
                <a
                  href="https://www.linkedin.com/in/akashjadon"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 13, color: '#a78bfa', display: 'inline-block', marginTop: 6 }}
                >
                  Connect on LinkedIn &rarr;
                </a>
              </div>

              <h2>
                <a href="https://www.linkedin.com/in/akashjadon" target="_blank" rel="noreferrer">
                  <QuestionIcon /> Mitos Documentation & Architecture
                </a>
              </h2>
              <p>
                Mitos enables visual prompt engineering, multi-agent orchestrations, and deterministic DAG pipeline
                execution across local and cloud LLMs.
              </p>

              <h2>
                <a href="https://www.linkedin.com/in/akashjadon" target="_blank" rel="noreferrer">
                  Support & Consultations
                </a>
              </h2>
              <p>For custom nodes, MCP server integrations, or enterprise deployment advice, reach out directly.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button appearance="primary" autoFocus onClick={() => setHelpModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
};
